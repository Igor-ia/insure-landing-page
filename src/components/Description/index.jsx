import { DescriptionField, CardsField } from './styled'
import IconSnappyProcess from '../../assets/icon-snappy-process.svg'
import IconAffordablePrices from '../../assets/icon-affordable-prices.svg'
import IconPeopleFirst from '../../assets/icon-people-first.svg'

export default function Description() {
    return (
        <DescriptionField>
            <h2>We're different</h2>

            <CardsField>
                <div className="card">
                    <img src={IconSnappyProcess} alt="" />
                    <h3>Snappy Process</h3>
                    <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                </div>
                <div className="card">
                    <img src={IconAffordablePrices} alt="" />
                    <h3>Affordable Prices</h3>
                    <p>We don't want you worrying about high monthly costs. Our  prices may be low, but we still offer the best coverage possible.</p>
                </div>
                <div className="card">
                    <img src={IconPeopleFirst} alt="" />
                    <h3>People First</h3>
                    <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
                </div>
            </CardsField>
        </DescriptionField>
    )
}