import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onCheckContent = () => {
        onToggleShowContent()
      }
      const onCheckLeft = () => {
        onToggleShowLeftNavbar()
      }
      const onCheckRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-con">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkbox-con">
            <input
              onClick={onCheckContent}
              id="content"
              type="checkbox"
              checked={showContent}
            />
            <label className="label-n" htmlFor="content">
              Content
            </label>
          </div>
          <div>
            <input
              onClick={onCheckLeft}
              id="left-nav"
              type="checkbox"
              checked={showLeftNavbar}
            />
            <label className="label-n" htmlFor="left-nav">
              Left Navbar
            </label>
          </div>
          <div>
            <input
              onClick={onCheckRight}
              id="right-nav"
              type="checkbox"
              checked={showRightNavbar}
            />
            <label className="label-n" htmlFor="right-nav">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
