import Box from "../../../components/box";
import { formatNumber } from "../../../helpers/format";

export default function RustMagic({
    stats,
    setID,
}) {
    return (
        <>
            {Object.keys(stats)?.map((gameName, i) => {
                let game = stats[gameName];

                return (
                    <>
                    <h2>{gameName}</h2>
                    <section key={i}>
                        <Box
                            value={game?.games}
                            name={`Total Number of Games of ${gameName}`}
                            info="Game have to be successfully finished"
                            slug={`${gameName}Games`}
                            set={_ => setID(_)}
                        />
                        <Box
                            value={formatNumber(game?.wager)}
                            name={`Total Wager of ${gameName}`}
                            slug={`${gameName}Wager`}
                            set={_ => setID(_)}
                        />
                        <Box
                            value={formatNumber(game?.payout)}
                            name={`Total Payout of ${gameName}`}
                            info="Wager + Winning Amount = Payout"
                            slug={`${gameName}Payout`}
                            set={_ => setID(_)}
                        />
                    </section>
                    </>
                )
            })}
            
        </>
    )
}