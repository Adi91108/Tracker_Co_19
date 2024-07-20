import { CardTable } from "../cards/CardTable"

export const columnsTopCases = [
        {
        name: 'Top Cases',
        selector: row => (
        <CardTable 
            flag={row.countryInfo.flag} 
            country={row.country}
            updated={row.updated}
        />
        ),
        sortable: true
        }
    ]
    export const columnsTodayCases = [
        {
        name: 'Today Cases',
        selector: row => ( 
        <CardTable 
            flag={row.countryInfo.flag} 
            country={row.country}
            updated={row.todayCases}
        />
        ),
        sortable: true
        }
    ]
    export const columnsTodayDeaths = [
        {
        name: 'Today Deaths',
        selector: row => ( 
        <CardTable 
            flag={row.countryInfo.flag} 
            country={row.country}
            updated={row.todayDeaths}
        />
        ),
        sortable: true
        }
    ]
    export const columnsTodayDeathsSecond = [
        {
        name: 'Today Deaths',
        selector: row => ( 
        <CardTable 
            flag={row.countryInfo.flag} 
            country={row.country}
            updated={row.todayDeaths}
        />
        ),
        sortable: true
        }
    ]
    export const columnsTopActive = [
        {
        name: 'Top Active',
        selector: row => ( 
        <CardTable 
            flag={row.countryInfo.flag} 
            country={row.country}
            updated={row.active}
        />
        ),
        sortable: true
        }
    ]
    export const columnsTodayrecovered = [
        {
        name: 'Top Recover',
        selector: row => ( 
        <CardTable 
            flag={row.countryInfo.flag} 
            country={row.country}
            updated={row.todayRecovered}
        />
        ),
        sortable: true
        }
    ]