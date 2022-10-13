import React from 'react'

const Home = (props) => {
    console.log("Home", props);
    return (
        <div>
            <div className='add-to-cart'>
                <img src='https://thumbs.dreamstime.com/b/add-to-cart-icon-adding-shopping-cart-well-organized-fully-editable-add-to-cart-icon-adding-shopping-cart-any-use-like-167547952.jpg' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://onesquare.pk/wp-content/uploads/2022/01/iphone-11-pro.png' />
                </div>
                <div className='text-wrapper item'>
                    <span>I-Phone</span>
                    <span>price : $999</span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={() => props.addToCartHandler({ price: 999, name: "I - Phone" })}>Add To cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;