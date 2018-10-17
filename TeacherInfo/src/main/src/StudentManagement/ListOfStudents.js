import React from 'react';
import EditLink from './EditLink';
import './Button.css'
import Button from './Button';

class ListOfStudents extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={isLoging:false,Students:[]}
        this.handleBack=this.handleBack.bind(this);
    }
    handleBack()
    {
        this.props.history.push('/TeacherHome');
    }
    componentDidMount()
    {
        this.setState({isLoaded:true});
        fetch("http://localhost:8080/LoginPage/ListOfAllStudents", {credentials: 'same-origin'})
        .then(res =>res.json())
        .then(
            (result)=>{
                this.setState({
                  isLoaded:false,
                  Students:result._embedded.Students
                });
              }
        )
    }
    render()
    {
       
        return( 
            <div> 
                <ul> 
                <EditLink> </EditLink>
                <Button buttonName="Back" handleOnClick={this.handleBack}/>
                </ul>
            </div>
        );
    }
}
export default ListOfStudents;  
























    // constructor(props)
    // {
    //     super(props);
    //     this.handleList = this.handleList.bind(this);
    // }
    // handleList()
    // {
    //     var names = [['1','Venu','v c', '9','D','MP,Null stop','pune','780405'],
    //                 ['2','Veag','Kta', '9','A','hp,Swargate','pune','780404'],
    //                 ['3','ragha','Sha', '9','B','LK,Karve road','pune','780801']];
    //     return (
    //         <div >
                
    //         <table>
    //         {
                
    //             names.map(function(name, index) 
    //             {
    //                 return <div> 
    //                         <tr>
    //                             <td>{name[0]}</td>
    //                             <td>{name[1]}</td>
    //                             <td>{name[2]}</td>
    //                             <td>{name[3]}</td>
    //                             <td>{name[4]}</td>
    //                             <td>{name[5]}</td>
    //                             <td>{name[6]}</td>
    //                             <td>{name[7]}</td>
    //                             <td><EditLink></EditLink></td>
    //                             <td><DeleteLink></DeleteLink></td>
    //                         </tr>
    //                       </div>
    //             })
    //         }
    //         </table>
    //     </div>
    //     )
    // }
    // render() {
    // return (
    //         <div>
    //             <center> {this.handleList()} </center>
    //         </div>
    //         );
    //         }


