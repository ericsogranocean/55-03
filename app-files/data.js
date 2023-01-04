var APP_DATA = {
  "scenes": [
    {
      "id": "0-cockpit",
      "name": "Cockpit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.056052905828991584,
        "pitch": 0.20928462705148654,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.9331110540490055,
          "pitch": 0.3099517252158215,
          "rotation": 2.356194490192345,
          "target": "11-starboard-engine-room"
        },
        {
          "yaw": 0.9829865707089738,
          "pitch": 0.3239599725178888,
          "rotation": 3.9269908169872414,
          "target": "10-port-engine-room"
        },
        {
          "yaw": -1.4256098209439134,
          "pitch": 0.13578412678703344,
          "rotation": 5.497787143782138,
          "target": "9-wheelhouse"
        },
        {
          "yaw": 3.0228698838238497,
          "pitch": 0.7289194580988827,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2141593031985352,
        "pitch": 0.3060290426734298,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.1599915678646351,
          "pitch": 0.6635032922039734,
          "rotation": 0,
          "target": "4-starboard-companionway"
        },
        {
          "yaw": 1.6079806631769689,
          "pitch": 0.35953253230393045,
          "rotation": 0,
          "target": "0-cockpit"
        },
        {
          "yaw": 3.0350263191009814,
          "pitch": 0.8277725235860061,
          "rotation": 0,
          "target": "2-master-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master-cabin",
      "name": "Master cabin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5007911686673534,
        "pitch": 0.29237649068602245,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.6233541029948881,
          "pitch": 0.17393482151030604,
          "rotation": 0,
          "target": "3-master-head"
        },
        {
          "yaw": 2.2702147573655704,
          "pitch": 0.35543209533061315,
          "rotation": 0.7853981633974483,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-head",
      "name": "Master head",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4653096412494637,
        "pitch": 0.22457864932874827,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 3.0867579328673003,
          "pitch": 0.8352200131495273,
          "rotation": 0,
          "target": "2-master-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-starboard-companionway",
      "name": "Starboard companionway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.806773252751423,
        "pitch": 0.1808127733280962,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.6901859542021391,
          "pitch": 0.42822233594243286,
          "rotation": 7.0685834705770345,
          "target": "1-salon"
        },
        {
          "yaw": -1.4779945063057056,
          "pitch": 0.6547834089177478,
          "rotation": 0,
          "target": "7-starboard-aft-cabin"
        },
        {
          "yaw": -2.2157597512617357,
          "pitch": 0.8886922049660129,
          "rotation": 5.497787143782138,
          "target": "6-starboard-midship-head"
        },
        {
          "yaw": 1.7232014190775127,
          "pitch": 0.6880177717451037,
          "rotation": 0,
          "target": "5-starboard-forward-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-starboard-forward-cabin",
      "name": "Starboard forward cabin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.08726646259971638,
        "pitch": 0.4412644555188763,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -2.448896126454512,
          "pitch": 0.9888474637966294,
          "rotation": 5.497787143782138,
          "target": "4-starboard-companionway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-starboard-midship-head",
      "name": "Starboard midship head",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.655353460385248,
        "pitch": 0.6246359060276117,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.421248712343794,
          "pitch": 1.0263765264448015,
          "rotation": 0.7853981633974483,
          "target": "4-starboard-companionway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-starboard-aft-cabin",
      "name": "Starboard aft cabin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3076850946382947,
        "pitch": 0.44694180695240426,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.01202826054012,
          "pitch": 0.9036054502026971,
          "rotation": 1.5707963267948966,
          "target": "4-starboard-companionway"
        },
        {
          "yaw": -2.9538695949851554,
          "pitch": 0.3223970216391354,
          "rotation": 6.283185307179586,
          "target": "8-starboard-aft-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-starboard-aft-head",
      "name": "Starboard aft head",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.030480754881542893,
        "pitch": 0.7144553751696634,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 3.02194819887864,
          "pitch": 1.0559598965734374,
          "rotation": 0.7853981633974483,
          "target": "7-starboard-aft-cabin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wheelhouse",
      "name": "Wheelhouse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.14417553167776553,
        "pitch": 0.24904332671621354,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.7711978088601334,
          "pitch": 0.29844618029897063,
          "rotation": 2.356194490192345,
          "target": "0-cockpit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-port-engine-room",
      "name": "Port engine room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-starboard-engine-room",
      "name": "Starboard engine room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Granocean W-55",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
