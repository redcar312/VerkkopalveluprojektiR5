import React from 'react'
import './App.css';

export default function AboutUs() {
    return (
        <div className="container">
            <h2>Tietoa meistä</h2>
            <div className="col-12 tietoja">
                Voima on vuonna 2021 perustettu verkkokauppa, joka on tehty Verkkopalveluprojektia varten. Myymälässä myydään kaikkea mahdollista perus elektroniikkaa
                puhelimista kodinkoneisiin. Tekijöinä ovat OAMKin opiskelijat Joonas Kelahaara, Konsta Jäske, Riku Honkamäki, Matias Hurtamo ja Joonas Kokko. Sivusto on toteutettu käyttämällä REACTia, PHPtä ja SQLlää.
            <h2 className="tietoja">
                Maksutavat
            </h2>
            <div className="col-12 tietoja Infoteksti">
                Maksutapoina yrityksessämme toimii Maksukortti, tilisiirto ja maksuluotto. Tuotteet on mahdollista saada myös laskulla.
            </div>
            <h2 className="col-12 tietoja infoTeksti">
                Toimitus
            </h2>
            <div className="col-12 tietoja">
                Tuotteiden toimitus tapahtuu kuljetusyhtiön kautta. Yleinen toimitusaika on 2-4 arkipäivää, mutta joidenkin tuotteiden kohdalla toimitus voi kestää
                kauemmin.
            <h2 className="tietoja">
                Yhteystiedot
            </h2>
            <div className="infoTeksti">
             <p>© Konsta Jäske, Joonas Kelahaara, Joonas Kokko, Matias Hurtamo, Riku Honkamäki</p>
                asiakaspalvelu@voima.kjeh
            </div>
            </div>
        </div>
        </div>
    )
}
