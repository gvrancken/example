
module.exports = {
    config: {
      "audioUrlPrefix" : "http://www.example.com/",
      "imageUrlPrefix" : "http://www.example.com/"
    },
    sounds: [

        {
            "id": "TestSound",
            "url":  require("../assets/audio/ns_mededeling.mp3")
        },
        {
            "id": "ProtocolOpen",
            "url":  require("../assets/audio/audio1.mp3")
        },
        {
            "id": "ProtocolClose",
            "url":  require("../assets/audio/audio2.mp3")
        },

    ],
    images: [
      {
        "id": "BackgroundImg",
        "url": require('../assets/application/background.png')
      },

      {
        "id": "IconTime",
        "url": require('../assets/icons/icon-time.png')
      },
      {
        "id": "IconTrain",
        "url": require('../assets/icons/icon-train.png')
      },
      {
        "id": "IconNode",
        "url": require('../assets/icons/icon-node.png')
      },
  
    ],
    "stationPositions": [
        {
            "name": "Atalanta",
            "id" : "20",
            "x": 373,
            "y": 232,
            "labelX": -100,
            "labelY": 0,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Athena",
            "id" : "10",
            "x": 421,
            "y": 275,
            "labelX": -100,
            "labelY": -7,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Iris",
            "id" : "12",
            "x": 460,
            "y": 232,
            "labelX": 7,
            "labelY": -35,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Ajax",
            "id" : "3",
            "x": 466,
            "y": 492,
            "labelX": 17,
            "labelY": -3,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Apollo",
            "id" : "8",
            "x": 505,
            "y": 277,
            "labelX": -80,
            "labelY": 10,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Heracles",
            "id" : "23",
            "x": 505,
            "y": 367,
            "labelX": -95,
            "labelY": 0,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Hector",
            "id" : "11",
            "x": 505,
            "y": 454,
            "labelX": 17,
            "labelY": -3,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Jason",
            "id" : "9",
            "x": 548,
            "y": 323,
            "labelX": -25,
            "labelY": 13,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Hypnos",
            "id" : "21",
            "x": 551,
            "y": 413,
            "labelX": 12,
            "labelY": -30,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Helios",
            "id" : "16",
            "x": 582,
            "y": 274,
            "labelX": 10,
            "labelY": -28,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Hermes",
            "id" : "13",
            "x": 625,
            "y": 232,
            "labelX": -5,
            "labelY": -38,
            "trainX": -50,
            "trainY": -35
        },
        {
            "name": "Achilles",
            "id": "6",
            "x": 627,
            "y": 322,
            "labelX": 14,
            "labelY": -30,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Ikaros",
            "id" : "2",
            "x": 700,
            "y": 155,
            "labelX": 15,
            "labelY": -2,
            "trainX": -55,
            "trainY": -30
        },
        {
            "id" : "0"
        },
        {
            "name": "Ares",
            "id" : "17",
            "x": 717,
            "y": 411,
            "labelX": -95,
            "labelY": 5,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Pan",
            "id" : "19",
            "x": 717,
            "y": 495,
            "labelX": 7,
            "labelY": -35,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Eros",
            "id" : "14",
            "x": 742,
            "y": 232,
            "labelX": 4,
            "labelY": 10,
            "trainX": -50,
            "trainY": -35
        },
        {
            "name": "Ilias",
            "id" : "1",
            "x": 744,
            "y": 385,
            "labelX": 3,
            "labelY": 12,
            "trainX": -50,
            "trainY": -33
        },
        {
            "name": "Orion",
            "id" : "22",
            "x": 769,
            "y": 323,
            "labelX": 15,
            "labelY": -12,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Pandora",
            "id" : "7",
            "x": 856,
            "y": 232,
            "labelX": 17,
            "labelY": -12,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Medusa",
            "id" : "15",
            "x": 854,
            "y": 411,
            "labelX": -40,
            "labelY": 17,
            "trainX": -50,
            "trainY": -30
        },
        {
            "name": "Hera",
            "id" : "5",
            "x": 907,
            "y": 410,
            "labelX": 12,
            "labelY": 7,
            "trainX": -50,
            "trainY": -30
        }
    ],
    "actors" : [
        {
            "type":"verkeersleider",
            "title": "verkeers leider",
            "image":"controller.png"
        },
        {
            "type":"machinist",
            "title":"machinist",
            "image":"driver.png"
        },
        {
            "type":"conducteur",
            "title": "conducteur",
            "image":"conductor.png"
        },
        {
            "type":"monteur",
            "title":"monteur",
            "image":"mechanic.png"
        }
    ],
    "actions" : [
        {
            "type":"askInfo",
            "title":"informatie vragen",
            "image":"askinfo.png"
        },
        {
            "type":"provideInfo",
            "title":"informatie geven",
            "image":"inform.png"
        },
        {
            "type":"assignTask",
            "title": "opdracht geven",
            "image":"instruct.png"
        }
    ]
}
