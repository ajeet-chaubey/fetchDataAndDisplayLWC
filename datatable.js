import { LightningElement,wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/DatatableController.fetchAccounts';

const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name'},
];

export default class Datatable extends LightningElement {
    data = [];
    columns = columns;

    @wire(fetchAccounts)
    wireMyData({error,data}){
        if(data){
            console.log('data::::',data);
            this.data = data;
        }else if(error){
            console.log('This is the Error while loading data: '+ JSON.stringify(error));
        }
    }
}
