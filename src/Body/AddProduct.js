import axios from 'axios';
import React, {
    Component,
    state,
    changeHandler,
    submitData} from 'react';

class AddProduct extends Component{
    state={
        productImage:"",
        productName:"",
        productDescription:"",
        productPrice:"",
        productRating:"",
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
    submitData=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:90/product/insert', this,state)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div className="addproduct_container">
            <form className="addproduct">   
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
                   
                    <button type="submit" className="ButtonUI" onClick={this.submitData}>Add Product</button>
            </form>
        </div>
        )
    }
}

export default AddProduct;