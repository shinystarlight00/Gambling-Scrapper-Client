import Box from "../../../components/box";
import { formatNumber } from "../../../helpers/format";

export default function BanditCamp({
    stats,
    setID,
}) {
    return (
        <>
            { !stats?.playedCoinflipGames ? (
                <img src="/images/loader.svg" alt="Loaeder" />
            ) : (
            <>
            <h2>Crate Battle Stats</h2>
            <section>
                <Box
                    value={stats?.playedCratesGames}
                    name="Total Number of Crate Battles Played"
                    info="Game must have successfully rolled for it to count"
                    slug="playedCratesGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.averageCratesWager)}
                    name="Average Crate Battle size (wager)"
                    info="Bots are excluded from this stat"
                    slug="averageCratesWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={Math.round(stats?.uniqueCratesPlayers || 0)}
                    name="Unique Players Created Crate Battle"
                    info="User must have created at least 1 crate battle"
                    slug="uniqueCratesPlayers"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.totalCratesWager)}
                    name="Crate Battle total wager"
                    info="Bots are excluded from this stat"
                    slug="totalCratesWager"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Wheel Stats</h2>
            <section>
                <Box
                    value={stats?.playedWheelGames}
                    name="Amount of Wheel Games Rolled"
                    info="Amount of wheel rounds"
                    slug="playedWheelGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.averageWheelPlayers)}
                    name="Average Players Per Round" // Cannot calculate "unique" players
                    slug="averageWheelPlayers"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.averageWheelWager)}
                    name="Average total wagered per round"
                    info="Calculated as all players and all their wagers for that round"
                    slug="averageWheelWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.totalWheelWager)}
                    name="Wheel Total Wager"
                    slug="totalWheelWager"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Spinner Battles</h2>
            <section>
                <Box
                    value={stats?.playedSpinnerGames}
                    name="Amount of Spinner Battles played"
                    info="Only battles that roll count"
                    slug="playedSpinnerGames"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.averageSpinnerWager)}
                    name="Average wager per Spinner Battle"
                    info="Bots are excluded from this stat"
                    slug="averageSpinnerWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.totalSpinnerWager)}
                    name="Spinner Battles Total Wager"
                    info="Bots are excluded from this stat"
                    slug="totalSpinnerWager"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Misc Stats</h2>
            <section>
                <Box
                    value={stats?.chatMessages}
                    name="Amount of messages sent in chat"
                    slug="chatMessages"
                    set={_ => setID(_)}
                />
                <Box
                    value={stats?.uniquePlayersChat}
                    name="Amount of unique users talked in chat"
                    info="User must have sent at least 1 message in chat"
                    slug="uniquePlayersChat"
                    set={_ => setID(_)}
                />
                <Box
                    value={Math.round(stats?.averageUserCount || 0)}
                    name="Average Online User Count"
                    info="This is calculated by pulling played count every 60 seconds and averaging it out by the timeframe selected"
                    slug="averageUserCount"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.averageRainValue)}
                    name="Average value of RakeBack Rain"
                    slug="averageRainValue"
                    set={_ => setID(_)}
                />
                <Box
                    value={stats?.rainAmount}
                    name="Amount of RakeBack Rains"
                    info="This is calculated as total number of rakeback rains"
                    slug="rainAmount"
                    set={_ => setID(_)}
                />
            </section>

            <h2>Leaderboard Stats</h2>
            <section>
                <Box
                    value={formatNumber(stats?.totalLeaderboardWager)}
                    name="Total Wager of Top 10 Leaderboard Players"
                    slug="totalLeaderboardWager"
                    set={_ => setID(_)}
                />
                <Box
                    value={formatNumber(stats?.averageLeaderboardWager)}
                    name="Average Wager amount per Leaderboard Player"
                    info="This is calculated by adding up top 10 leaderboard player's wager and diving it by 10"
                    slug="averageLeaderboardWager"
                    set={_ => setID(_)}
                />
            </section>
            </>
            )}
        </>
    )
}