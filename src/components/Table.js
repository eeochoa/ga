import React, { useState, useEffect, useRef } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

// export const getStaticProps = async () => {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await resp.json();
//     return {
//       users: data 
//     }
// }


const TableComponent = () => {

    const [users, setUsers] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await resp.json();
            setUsers(data);
        }
        fetchData();
    }, []);

    return(
        
        <div className="col-12">
                <div className="card">
                    <h5>Filter Menu</h5>
                    <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <InputText
                            placeholder="Search"
                            onChange={e => setGlobalFilter(e.target.value)}
                        />
                    </div>
                </div>
                    <DataTable
                        value={users}
                        paginator
                        className="p-datatable-gridlines"
                        showGridlines
                        rows={10}
                        dataKey="id"
                        filterDisplay="menu"
                        responsiveLayout="scroll"
                        emptyMessage="No customers found."
                        globalFilter={globalFilter}
                    >
                        <Column field="id" header="ID" style={{ minWidth: '12rem' }} />
                        <Column
                            header="Name"
                            filterField="name"
                            showFilterMatchModes={false}
                            filterMenuStyle={{ width: '14rem' }}
                            style={{ minWidth: '14rem' }}
                        />
                        <Column
                            field="username" 
                            header="Username"
                            filterField="username"
                            showFilterMatchModes={false}
                            filterMenuStyle={{ width: '14rem' }}
                            style={{ minWidth: '14rem' }}
                        />
                        <Column 
                            field="email" 
                            header="Email" 
                            filterField="email" 
                            dataType="email" 
                            style={{ minWidth: '10rem' }} 
                        />
                        <Column 
                            field="phone" 
                            header="Phone" 
                            filterField="phone" 
                            dataType="phone" 
                            style={{ minWidth: '10rem' }} 
                        />
                        <Column 
                            field="website" 
                            header="Website"
                            filterField="website"
                            filterMenuStyle={{ width: '14rem' }} 
                            style={{ minWidth: '12rem' }} 
                        />
                        {/* <Column header="Created" filterField="date" dataType="date" style={{ minWidth: '10rem' }} />
                        <Column header="Updated" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} />
                        <Column field="status" header="Last Seen" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} />
                        <Column field="activity" header="Score" showFilterMatchModes={false} style={{ minWidth: '12rem' }}/>
                        <Column field="migrated" header="Migrated" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }}/> */}
                    </DataTable>
                </div>
            </div>
    );
};

export default TableComponent;