import Box from "../../../components/box";
import { formatNumber } from "../../../helpers/format";

export default function RustClash({
    stats,
    setID,
}) {
    return (
        <>
            { !stats?.playedCoinflipGames ? (
                <img src="/images/loader.svg" alt="Loaeder" />
            ) : (
                <>
                <h2>Case Battle Stats</h2>
                <section>
                    <Box
                        value={formatNumber(0)}
                        name="Total Number of Case Battles Played"
                        info="Game must have successfully rolled for it to count"
                        slug="playedCaseGames"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Average Case Battle size (wager)"
                        info="Bots are excluded from this stat"
                        slug="averageCaseWager"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Unique Players Created Case Battle"
                        info="User must have created at least 1 case battle"
                        slug="uniqueCasePlayers"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Case Battle total wager"
                        info="Bots are excluded from this stat"
                        slug="totalCaseWager"
                        set={_ => setID(_)}
                    />
                </section>

                <h2>Roulette Stats</h2>
                <section>
                    <Box
                        value={formatNumber(0)}
                        name="Amount of Roulette Games played"
                        info="Amount of roulette rounds"
                        slug="playedRouletteGames"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Average Unique Players per Round"
                        slug="rouletteAverageUniquePlayers"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Average total wagered per round"
                        info="Calculated as all players and all their wagers for that round"
                        slug="rouletteWagerPerROund"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Roulette Total Wager"
                        slug="totalRouletteWager"
                        set={_ => setID(_)}
                    />
                </section>

                <h2>Misc Stats</h2>
                <section>
                    <Box
                        value={formatNumber(0)}
                        name="Amount of messages sent in chat"
                        slug="chatMessages"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Amount of unique users talked in chat"
                        info="User must have sent at least 1 message in chat"
                        slug="uniquePlayersChat"
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
                        slug="averageRainValue"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Total Amount Given Away in Rain"
                        slug="rainAmount"
                        set={_ => setID(_)}
                    />
                </section>

                <h2>Leaderboard Stats</h2>
                <section>
                    <Box
                        value={formatNumber(0)}
                        name="Total Wager of Top 10 Leaderboard Players"
                        slug="totalWagerTopTenLeaderboard"
                        set={_ => setID(_)}
                    />
                    <Box
                        value={formatNumber(0)}
                        name="Average Wager amount per Leaderboard Player"
                        info="This is calculated by adding up top 10 leaderboard player's wager and diving it by 10"
                        slug="averageWagerLeaderboard"
                        set={_ => setID(_)}
                    />
                </section>
                </>
            )}
        </>
    )
}