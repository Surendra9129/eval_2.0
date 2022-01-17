import React from 'react';
const handlesub=()=>{
    alert('thanx for posting a job')
}

const Addjob = () => {
    return (
        <div>
            <form onSubmit={handlesub}>
                <h3>post a job</h3>
                <label htmlFor="">Company Name</label>
                <input type="text" name="" id=""  placeholder='name of the company'/><br />
                <label htmlFor="">Job Title</label>
                <input type="text" name="" id=""  placeholder='enter job title'/><br />
                <label htmlFor="">salary</label>
                <input type="number" name="" id=""  placeholder='enter base salary'/><br />
                <label htmlFor="">Job Description</label>
                <input type="text-area" name="" id=""  placeholder='give a sort description here'/><br />
                <label htmlFor="">location</label>
                <input type="text" name="" id=""  placeholder='enter company location'/><br />
                <label htmlFor="">job type</label>
                <input type="text" name="" id=""  placeholder='for ex-remote'/><br />
                <input type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default Addjob;