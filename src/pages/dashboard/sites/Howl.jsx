import Box from "../../../components/box";
import { formatNumber } from "../../../helpers/format";

export default function Howl({
    stats,
    setID,
}) {
    return (
        <>
            { !stats?.playedCoinflipGames ? (
                <img src="/images/loader.svg" alt="Loaeder" />
            ) : (
            <>
            <h2>Coinflip Statistics</h2>
            <section>
                <Box
                    value={formatNumber(0)}
                    name="Total Number of Coinflip Games Rolled"
                    slug="playedCoinflipGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average Coinflip Game size (wager)"
                    info="Calculated as total value of the flip"
                    slug="averageCoinflipWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Coinflip Total Wager"
                    info="Calculated with only Player's amount (P2P flips included)"
                    slug="totalCoinflipWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Howly Win Percentage"
                    slug="botWinPercentage"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Player versus Player Flips (%)"
                    slug="playerVsPlayerPercentage"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Player versus Bot Flips (%)"
                    slug="playerVsBotPercentage"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Coinflip Games Cancelled"
                    slug="cancelledCoinflipGames"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Jackpot Stats</h2>
            <section>
                <Box
                    value={formatNumber(0)}
                    name="Total Numbers of Jackpots Rolled"
                    slug="playedJackpotGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average Jackpot Game Value"
                    slug="averageJackpotWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Jackpot Total Wager"
                    slug="totalJackpotWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Biggest Jackpot Game"
                    slug="biggestJackpotGame"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Wheel Stats</h2>
            <section>
                <Box
                    value={formatNumber(0)}
                    name="Amount of Wheel Games Rolled"
                    info="Amount of wheel rounds"
                    slug="playedWheelGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average Unique Players per Round"
                    slug="wheelAverageUniquePlayers"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average total wagered per round"
                    info="Calculated as all players and all their wagers for that round"
                    slug="averageWheelWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Wheel Total Wager"
                    slug="totalWheelWager"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Blackjack Stats</h2>
            <section>
                <Box
                    value={formatNumber(0)}
                    name="Amount of Blackjack Games Played"
                    info="Amount of Blackjack rounds"
                    slug="playedBlackjackGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average Wager Size per Bet"
                    slug="averageBlackjackWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Blackjack profit"
                    info="Calculated as Payout - Bet Amount"
                    slug="blackjackProfit"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Blackjack Total Wager"
                    slug="totalBlackjackWager"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Slots Stats</h2>
            <section>
                <Box
                    value={formatNumber(0)}
                    name="Amount of Slots Games Played"
                    slug="playedSlotsGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average Wager Size per Bet"
                    slug="averageSlotsWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Slots profit"
                    info="Calculated as Payout - Bet Amount"
                    slug="slotsProfit"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Slots Total Wager"
                    slug="totalSlotsWager"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Live Game Stats</h2>
            <section>
                <Box
                    value={formatNumber(0)}
                    name="Amount of Live Games Played"
                    slug="playedLiveGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average Wager Size per Bet"
                    slug="totalLiveWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Live Games profit"
                    info="Calculated as Payout - Bet Amount"
                    slug="liveGamesProfit"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Live Games Total Wager"
                    slug="totalLiveProfit"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Misc Stats</h2>
            <section>
                <Box
                    value={formatNumber(0)}
                    name="Amount of messages sent in chat"
                    slug="messageCount"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average Online User Count"
                    info="This is calculated by pulling played count every 60 seconds and averaging it out by the timeframe selected"
                    slug="averageUserCount"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Average value of Rain"
                    slug="averageRain"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(0)}
                    name="Total Amount Given Away in Rain"
                    slug="totalRainAmount"
                    set={_ => setID(_)}
                />
            </section>
            </>
            )}
        </>
    )
}