const {Client} = require('pg');

var db_ins = null;

const init_db=(re_init)=>{
  
  if(db_ins == null || db_ins == undefined || re_init ) {
    const client = new Client({

      user: 'wzmcpmyjkmvbgs',
      host: 'ec2-52-21-136-176.compute-1.amazonaws.com',
      database: 'dbrggdn52uaod1',
      password: 'a9929c64f0c836d8e13a4b184987755e3f6ca7b1e8f046ead7ed7e4776bdace6',
      port: '5432',
      ssl: {
        rejectUnauthorized: false
      },
      connectionString: process.env.DATABASE_URL,
      
      // host:"localhost", 
      // port:"5432",
      // user:"deepak",
      // password:"123",
      // dbname:"deepak"
    })
    
    client.connect();

    client.query("CREATE TABLE IF NOT EXISTS public.subject("+
    "id SERIAL PRIMARY KEY,"+
    "name VARCHAR,"+
    "for_courses JSON);");

    client.query("CREATE TABLE IF NOT EXISTS public.faculty("+
    "id SERIAL PRIMARY KEY,"+
    "unique_id VARCHAR,"+
    "name VARCHAR,"+
    "subject_id INTEGER,"+
    "CONSTRAINT fk_subject FOREIGN KEY(subject_id) REFERENCES subject(id));");
    
    client.query("CREATE TABLE IF NOT EXISTS public.q_paper("+
    "srl SERIAL PRIMARY KEY,"+
    "subject_id INTEGER,"+
    "faculty_id INTEGER,"+
    "paper_code VARCHAR,"+
    "marks INTEGER,"+
    "description JSON,"+
    "CONSTRAINT fk_faculty FOREIGN KEY(faculty_id) REFERENCES faculty(id) , "+
    "CONSTRAINT fk_subject FOREIGN KEY(subject_id) REFERENCES subject(id));");

    client.query("CREATE TABLE IF NOT EXISTS public.student("+
    "id SERIAL PRIMARY KEY,"+
    "roll INTEGER,"+
    "name VARCHAR,"+
    "sem integer,"+
    "course VARCHAR);");

    client.query("CREATE TABLE IF NOT EXISTS public.answer("+
    "id SERIAL PRIMARY KEY,"+
    "student_id INTEGER,"+
    "QP_id INTEGER,"+
    "ans JSON,"+
    "CONSTRAINT fk_student FOREIGN KEY(student_id) REFERENCES student(id),"+
    "CONSTRAINT fk_q_paper FOREIGN KEY(QP_id) REFERENCES q_paper(id));");

    client.query("CREATE TABLE IF NOT EXISTS public.result("+
    "id SERIAL PRIMARY KEY,"+
    "student_id INTEGER,"+
    "QP_id INTEGER,"+
    "score INTEGER,"+
    "CONSTRAINT fk_student FOREIGN KEY(student_id) REFERENCES student(id),"+
    "CONSTRAINT fk_q_paper_id FOREIGN KEY(QP_id) REFERENCES q_paper(id));");
    
    db_ins = client;
  }

  return db_ins;
}

module.exports = {init_db};