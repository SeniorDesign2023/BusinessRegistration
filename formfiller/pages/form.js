import JsonFormPage from '../app/FormPages/JsonFormPage';

export async function getServerSideProps(context) {

    form = context.res.form;
    if (!form) {
        form = null; //because undefined causes errors. Why is it undefined? Because Next woke up and decided to ignore the server today.
    }

    return {props: {
        form
    }}

}

export default function form({form}) {
    return <JsonFormPage form={form}/>;
}