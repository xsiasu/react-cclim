import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Glass from './Glass';
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: props.initialLayout }
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
    
  }

  componentDidMount() {
    this.setState({ mounted: true });
    this._getGlasses()
  }

  _renderGlasses() {
     return _.map(this.state.glasses, function(glass) {
        
      return (
        <Glass
          name = {glass.name}
          image = {glass.image}
          key = {glass.id}
          category = {glass.category}
        />     
        
      );
    });
  }

//   generateDOM() {
//     return _.map(this.state.layouts.lg, function(l, i) {
//       return (
//         <div key={i} className={l.static ? "static" : ""}>
//           {l.static ? (
//             <span
//               className="text"
//               title="This item is static and cannot be removed or resized."
//             >
//               Static - {i}
//             </span>
//           ) : (
//             <span className="text">{i}</span>
//           )}
//         </div>
//       );
//     });
//   }


  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
          ? null
          : "horizontal";
    this.setState({ compactType });
  }

  onLayoutChange(layout, layouts) {
    this.props.onLayoutChange(layout, layouts);
  }

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  }


  _getGlasses = async() => {
    const glasses = await this._callApi();
    this.setState({
      glasses
    })
  }
  _callApi = () => {
    // 무비데이터를 리턴한다
    return(
      fetch("https://res.cloudinary.com/dlrv4nsyi/raw/upload/v1544526021/data/json/dataglass.json")
      .then(response =>response.json())
      .then(json => json.data.glasses)
      .catch(err => console.log(err))
    )
  }

  render() {
    const {glasses} = this.state;
    console.log({glasses});
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
       {this._renderGlasses()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

ShowcaseLayout.defaultProps = {
  isResizable: false,
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function() {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout()
};

function generateLayout() {
  return _.map(_.range(0, 19), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}
