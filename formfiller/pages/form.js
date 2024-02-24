import JsonFormPage from '../app/FormPages/JsonFormPage';

export async function getServerSideProps(context) {

    return {props: {
        form: context.res.form
    }}

}

export default function form({form}) {
    return <JsonFormPage form={form}/>;
}