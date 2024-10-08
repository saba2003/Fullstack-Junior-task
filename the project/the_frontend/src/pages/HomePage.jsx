import { Component } from 'react';
import ProductList from '../components/ProductList'
import { CategoryContext } from '../helpers/CategoryContext';

class HomePage extends Component{
    render() {
        return(
            <CategoryContext.Consumer>
                {({ 
                    category,
                    changeCategory 
                }) => (
                    <div className="home-page">
                        <h1>{category.toUpperCase()}</h1>
                        <ProductList 
                            category={category} 
                            changeCategory = {changeCategory}
                        />
                    </div>
                )}
            </CategoryContext.Consumer>
        ) 
    }
}

export default HomePage;