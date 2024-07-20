import React, { useEffect, useRef } from 'react';
import { getDataByCountry } from '../../services/apiService';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-responsive';
import 'datatables.net-responsive-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';
import './table.css';

const Table = () => {
    const tableRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataByCountry();
                if ($.fn.dataTable.isDataTable(tableRef.current)) {
                    $(tableRef.current).DataTable().destroy();
                }
                $(tableRef.current).DataTable({
                    data: data,
                    columns: [
                        {
                            title: 'Flag',
                            data: 'countryInfo.flag',
                            render: function (data) {
                                return `<img src="${data}" alt="Flag" style="width: 2.50rem;" />`;
                            },
                        },
                        { title: 'Country', data: 'country' },
                        { title: 'Cases', data: 'cases' },
                        { title: 'New Cases', data: 'todayCases' },
                        { title: 'Deaths', data: 'deaths' },
                        { title: 'New Deaths', data: 'todayDeaths' },
                        { title: 'Recovered', data: 'recovered' },
                        { title: 'Active', data: 'active' },
                        { title: 'Critical', data: 'critical' },
                        { title: 'Tested', data: 'tests' },
                    ],
                    responsive: true,
                    language: {
                        paginate: {
                            previous: 'Previous',
                            next: 'Next',
                        },
                        length: 'Show ',
                        info: 'Showing _START_ to _END_ of _TOTAL_ entries',
                        lengthMenu: 'Show _MENU_ entries',
                    },
                });
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="tableT2">
        <table ref={tableRef} className="table table-striped table-hover" style={{ width: '100%' }}></table>
        </div>
    );
};

export default Table;