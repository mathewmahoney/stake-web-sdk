from collections import defaultdict
from math import sqrt
import numpy as np


def get_lookup_length(filepath: str) -> int:
    """Get length of lookup table."""
    return sum(1 for _ in open(filepath, "rb"))


def make_win_distribution(filepath: str, normalize: bool = True) -> dict:
    """Construct win-distribution with unique, ordered payouts."""
    dist = defaultdict(float)
    with open(filepath, "r", encoding="UTF-8") as f:
        for line in f:
            _, weight, payout = line.strip().split(",")
            weight = int(weight)
            payout = float(payout) / 100
            dist[payout] += weight

    # Sort by win amount
    dist = dict(sorted(dist.items(), key=lambda x: x[0], reverse=False))
    if normalize:
        total_weight = sum(dist.values())
        dist = {x: y / total_weight for x, y in dist.items()}

    return dist


def get_distribution_average(dist: dict) -> float:
    """Return weighted average from ordered win distribution."""
    return np.average(list(dist.keys()), weights=list(dist.values()))


def get_distribution_moments(dist: dict) -> float:
    """Given a (weighted) lookup-table, return standard deviation."""
    av_win = get_distribution_average(dist)
    total_weight = sum(list(dist.values()))

    variance = 0.0
    for pay, weight in dist.items():
        variance += ((pay - av_win) ** 2) * (weight / total_weight)
    standard_dev = sqrt(variance)

    skewness, kurtosis = 0.0, 0.0
    av_win = float(av_win)
    for win, weight in dist.items():
        skewness += ((win - av_win) ** 3) * weight
        kurtosis += ((win - av_win) ** 4) * weight
    skewness /= (standard_dev) ** 3
    kurtosis /= (standard_dev) ** 4
    kurtosis -= 3

    return variance, standard_dev, skewness, kurtosis


def get_distribution_median(dist: dict, total_weight=None) -> float:
    """Return median of an ordered win-distribution."""
    if total_weight is not None:
        total_weight = sum(list(dist.values()))
    cumulative_weight = 0
    for win, weight in dist.items():
        cumulative_weight += weight
        if cumulative_weight >= total_weight / 2:
            return win
    return 0


def get_maxwin_hitrate(dist: dict, total_weight=None) -> float:
    """Return frequency of max-win."""
    if total_weight is not None:
        total_weight = sum(list(dist.values()))
    max_win_prob = dist[max(list(dist.keys()))] / total_weight
    return 1.0 / max_win_prob


def get_prob_no_win(dist: dict, total_weight=None) -> float:
    "Probability of 0x payout amount."
    if total_weight is not None:
        total_weight = sum(list(dist.values()))

    if min(dist.keys()) == 0:
        return dist[0]
    return 0


def prob_less_than_bet(dist: dict, bet_cost: float, total_weight=None):
    """Probability of winning less than mode bet cost."""
    if total_weight is not None:
        total_weight = sum(list(dist.values()))
    cumulative_prob = 0
    for win, weight in dist.items():
        if win < bet_cost:
            cumulative_prob += weight

    return cumulative_prob / total_weight


def non_zero_hitrate(dist: dict, total_weight=None):
    """Calculate probability of"""
    if total_weight is not None:
        total_weight = sum(list(dist.values()))

    if min(dist.keys()) == 0:
        return 1 / (1 - dist[0] / total_weight)
    else:
        return 1


def calculate_rtp(dist: dict, bet_cost: float, total_weight: float = None) -> float:
    """Get distribution RTP."""
    if total_weight is not None:
        total_weight = sum(list(dist.values()))
    return float(np.dot(list(dist.keys()), list(dist.values()))) / total_weight / bet_cost


def min_dist_difference(dist: dict):
    """Minimum payout amount difference"""
    wins = list(dist.keys())
    diff = None
    for i in range(len(wins) - 2):
        if diff is None or (diff > abs(wins[i + 1]) - wins[i]):
            diff = abs(wins[i + 1]) - wins[i]
    return int(round(diff * 100))
