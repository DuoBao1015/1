var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

// prettier-ignore
var hours = ['1967','1968','1969','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979',
            '1980','1981','1982','1983','1984','1985','1986','1987'];
// prettier-ignore
var days = ['Black','Hispanic','White','Asian'];
// prettier-ignore
var data = [/*1967*/[0,0,29388],/*1968*/[0,1,31084],/*1969*/[0,2,33125],/*1970*/[0,3,33031],/*1971*/[0,4,31879],/*1972*/[0,5,32949],/*1973*/[0,6,33864],/*1974*/[0,7,33059],/*1975*/[0,8,32496],/*1976*/[0,9,32777],/*1977*/[0,10,32860],/*1978*/[0,11,34363],/*1979*/[0,12,33794],/*1980*/[0,13,32284],/*1981*/[0,14,30992],
            /*1982*/[0,15,30930],/*1983*/[0,16,30806],/*1984*/[0,17,32055],/*1985*/[0,18,34092],/*1986*/[0,19,34095],/*1987*/[0,20,34256]];
option = {
  tooltip: {},
  visualMap: {
    max: 120000,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026'
      ]
    }
  },
  xAxis3D: {
    type: 'category',
    data: hours
  },
  yAxis3D: {
    type: 'category',
    data: days
  },
  zAxis3D: {
    type: 'value'
  },
  grid3D: {
    boxWidth: 200,
    boxDepth: 80,
    viewControl: {
      // projection: 'orthographic'
    },
    light: {
      main: {
        intensity: 1.2,
        shadow: true
      },
      ambient: {
        intensity: 0.3
      }
    }
  },
  series: [
    {
      type: 'bar3D',
      data: data.map(function (item) {
        return {
          value: [item[1], item[0], item[2]]
        };
      }),
      shading: 'lambert',
      label: {
        fontSize: 16,
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20,
          color: '#900'
        },
        itemStyle: {
          color: '#900'
        }
      }
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);