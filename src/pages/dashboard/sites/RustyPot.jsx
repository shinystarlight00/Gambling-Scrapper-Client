import Box from "../../../components/box";
import { formatNumber } from "../../../helpers/format";

export default function RustyPot({
    stats,
    setID,
    estimatedProfit
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
                        value={formatNumber(stats?.playedCoinflipGames, 0)}
                        name="Total Number of Coinflip Games Rolled"
                        slug="playedCoinflipGames"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={"$" + formatNumber(stats?.averageCoinflipWager)}
                        name="Average Coinflip Game Value"
                        info="Calculated as total value of the flip"
                        slug="averageCoinflipWager"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={"$" + formatNumber(stats?.totalCoinflipWager)}
                        name="Coinflip Total Wager"
                        info="Calculated with only Player’s amount (P2P flips included)"
                        slug="totalCoinflipWager"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(stats?.coinflipJimmyWinPercentage) + "%"}
                        name="Jimmy Win Percentage"
                        slug="coinflipJimmyWinPercentage"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(stats?.coinflipPlayerVsPlayerPercentage) + "%"}
                        name="Player versus Player Flips (%)"
                        slug="coinflipPlayerVsPlayerPercentage"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(stats?.coinflipBotVsPlayerPercentage) + "%"}
                        name="Player versus Bot Flips (%)"
                        slug="coinflipBotVsPlayerPercentage"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(stats?.cancelledCoinflipGames, 0)}
                        name="Coinflip Games Cancelled"
                        slug="cancelledCoinflipGames"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={"$" + formatNumber(estimatedProfit, 0)}
                        name="Estimated Profit"
                        info="You can adjust the tax amount in the pop up"
                        slug="estimatedProfit"
                        set={_ => setID(_)}
                    />
                </section>

                <h2>Jackpot Statistics</h2>
                <section>
                    <Box
                        value={formatNumber(stats?.playedJackpotGames, 0)}
                        name="Amount of Jackpot Games Rolled"
                        slug="playedJackpotGames"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={"$" + formatNumber(stats?.averageJackpotWager)}
                        name="Average Jackpot Game Value"
                        slug="averageJackpotWager"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={"$" + formatNumber(stats?.totalJackpotWager)}
                        name="Jackpot Total Wager"
                        slug="totalJackpotWager"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={"$" + formatNumber(stats?.biggestJackpotGame)}
                        name="Biggest Jackpot Game"
                        slug="biggestJackpotGame"
                        set={_ => setID(_)}
                    />
                </section>

                <h2>Misc Stats</h2>
                <section>
                    <Box
                        value={formatNumber(stats?.chatMessages, 0)}
                        name="Amount of messages sent in chat"
                        slug="chatMessages"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(stats?.uniquePlayers, 0)}
                        name="Unique Users Played"
                        info="User must have created at least 1 game"
                        slug="uniquePlayers"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(stats?.averageUserCount?.count, 0)}
                        name="Average Online User Count"
                        info="This is calculated by pulling played count every 60 seconds and averaging it out by the timeframe selected"
                        slug="averageUserCount"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(stats?.flashGiveaways, 0)}
                        name="Amount of individual flash giveaways"
                        slug="flashGiveaways"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={"$" + formatNumber(stats?.flashGiveawayPayout)}
                        name="Flash Giveaway Total Payout"
                        info="This is calculated as total given away through flash giveaways"
                        slug="flashGiveawayPayout"
                        set={_ => setID(_)}
                    />
                </section>
                </>
            )}
        </>
    )
}