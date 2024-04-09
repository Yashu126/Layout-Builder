// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-con">
          {showLeftNavbar && (
            <div className="left-right-nav-con">
              <h1 className="navs-head">Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="context-nav-con">
              <h1 className="navs-head">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Incididunt labore et dolore mangna aliqua. Ut
                enim ad minim venlam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-right-nav-con">
              <h1 className="navs-head">Right Navbar</h1>
              <p className="add-box">Ad 1</p>
              <p className="add-box">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
