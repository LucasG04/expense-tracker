export class Invoice {
    id?: string;
    title: string;
    costs: number;
    category: string;
    date: Date;
    note: string;
    biller: firebase.User;

}
