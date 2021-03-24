import{Component, state, changeHandler} from "react";
import axios from 'axios';

class Update extends Component{
    state={
        productImage:"",
        productName:"",
        productDescription:"",
        productPrice:"",
        productRating:"",
        id: this.props.match.params.id,
        config:{
            headers:{
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitData(_id){
        console.log(_id)
        axios.put("http://localhost:90/product/update" + _id,this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div className="update_container">
            <form className="update">   
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="productImage" name="productImage" value ={this.state.productImage}
                        onChange={this.changeHandler}/>
                    </div>  
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="productName" name="productName" value ={this.state.productName}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="productDescription" name="productDescription" value ={this.state.productDescription}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="productPrice" name="productPrice" value ={this.state.productPrice}
                        onChange={this.changeHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="productRating" name="productRating" value ={this.state.productRating}
                        onChange={this.changeHandler}/>
                    </div>
                   
                    <button type="submit" className="ButtonUI" onClick={this.submitData}>Update</button>
            </form>
        </div>
        )
    }
}

export default Update;