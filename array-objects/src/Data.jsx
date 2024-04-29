import React from 'react'
import './App.css';
function Data(props) {
  return (
    <>
        {
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.posts.map((element)=>(
                                <tr key={element.id}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.position}</td>
                                    <td>{element.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>                    
                </table>
            </div>
        }
    </>
  )
}

export default Data