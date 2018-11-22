
var Link = require('react-router').Link
var React = require('react')

var App = React.createClass({
  render: function () {
    return <div className="app">
      <div className="app_header">
        <span className="app_title">来勃物业</span>
        <ul className="app_nav">
          <li><Link to="posts">文章</Link></li>
          <li><Link to="pages">页面</Link></li>
        </ul>
      </div>
      <div className="app_main">
        <this.props.activeRouteHandler/>
      </div>
    </div>;
  }
})
// <li><Link to="about">About</Link></li>
// <li><Link to="deploy">Deploy</Link></li>
// <li><Link to="settings">设置</Link></li>

module.exports = App
