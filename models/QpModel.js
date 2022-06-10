const { raw } = require("express");

db = require("../init");
pg_client = db.init_db();

const reinitDB=async()=>{
    pg_client=db.init_db(true);
    return {'sucess':true}
}

const GetAllQpapers=async()=>{
    return await pg_client.query('SELECT * FROM q_paper')
}

const DropAll=async()=>{
    await pg_client.query('DROP TABLE IF EXISTS student');
    await pg_client.query('DROP TABLE IF EXISTS faculty');
    await pg_client.query('DROP TABLE IF EXISTS q_paper');
    await pg_client.query('DROP TABLE IF EXISTS subject');

    return {'success':true}
}

const AddQuestion=async(data)=>{
    let raw = "INSERT INTO q_paper(marks,description) VALUES ("+"'"+data.marks+"'"+','+"'"+data.des+"'"+")";
    return await pg_client.query(raw);
}

const searchQ=async(data)=>{
    let raw = "select *,s.name as sub_name,f.name as fac_name from q_paper p "+
    " full join subject s on s.id = p.subject_id full join faculty f on p.faculty_id = f.id ";

    if(data.p_code!=null || data.p_code!=undefined)
    raw+="where p.paper_code LIKE \'%"+data.p_code+"%\' ";

    if(data.f_name!=null || data.f_name!=undefined)
    raw+="or where f.name LIKE \'%"+data.f_name+"%\' ";

    raw+=";";

    return await pg_client.query(raw);
}

const submitQp=async(data)=>{
    console.log("ans:",data);
    let raw = "INSERT INTO answer(student_id,QP_id,ans) VALUES ("+
    data.std_id+","+data.QP_id+","+data.ans+")";

    pg_client.query(raw);

    let paper = await pg_client.query("SELECT * FROM q_paper WHERE srl = "+data.QP_id);

    console.log("p:",paper);
}

module.exports = {GetAllQpapers,DropAll,AddQuestion,searchQ,reinitDB,submitQp};