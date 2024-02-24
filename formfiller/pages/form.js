import JsonFormPage from '../app/FormPages/JsonFormPage';

//import {post} from "@/lib/http"

export async function getServerSideProps(context) {

    // var formName = "__test"

    // //var result = database.query("SELECT From_Data FROM FORM WHERE Form_Name = ?", formName)

    // var result = await post("dbquery", {
    //     query: "SELECT From_Data FROM FORM WHERE Form_Name = ?", 
    //     data: [formName]
    // })
    // var form = result[0]
    // form.name = formName
    
    // // TODO: get autofill data

    // console.log(query)

    return {props: {
        form: context.res.form
    }}

}

export default function form({form}) {
    return <JsonFormPage form={form}/>;
}