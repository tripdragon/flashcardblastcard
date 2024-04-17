
// while reuse is ideal, it also makes for some complicated schemas
// whith the results needing to be two forms
// 
// A display question
// a jumbled set of options
// HOW and what they are is up to the builder
// to produce complexity
// if its referencing ids on an other database, the whole thing gets brittle
// the only nessesary interface needs to be
// Display: Options
// BUT some things have many labels to the question
// Like Japanese Kanji will have the (furigana) little hirigana at the top
// and images might have labels
// 
// UGH complexites

// a pair, is both the question and the answer
// {"a": "あ"}
// how logic determines this maybe just a starter flag

export const languages = {
    "japanese": {
      "hiragana": {
          "items": [ {"a": "あ"}, {"i": "い"}, {"u": "う"}, {"e": "え"}, {"o": "お"}, {"ka": "か"}, {"ki": "き"}, {"ku": "く"}, {"ke": "け"}, {"ko": "こ"}, {"sa": "さ"}, {"shi": "し"}, {"su": "す"}, {"se": "せ"}, {"so": "そ"}, {"ta": "た"}, {"chi": "ち"}, {"tsu": "つ"}, {"te": "て"}, {"to": "と"}, {"na": "な"}, {"ni": "に"}, {"nu": "ぬ"}, {"ne": "ね"}, {"no": "の"}, {"ha": "は"}, {"hi": "ひ"}, {"fu": "ふ"}, {"he": "へ"}, {"ho": "ほ"}, {"ma": "ま"}, {"mi": "み"}, {"mu": "む"}, {"me": "め"}, {"mo": "も"}, {"ya": "や"}, {"yu": "ゆ"}, {"yo": "よ"}, {"ra": "ら"}, {"ri": "り"}, {"ru": "る"}, {"re": "れ"}, {"ro": "ろ"}, {"wa": "わ"}, {"wo": "を"}, {"n": "ん"} ]
      }
    },
  "german" : {
    "numbers":{
      // replace this for a builder
      // "possibles" : ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun"],
      "items" : [
        // { "answer":"null", "displayType":"text", "word":"0", "choices":[]},
        // { "answer":"eins", "displayType":"text", "word":"1", "choices":[]},
        // ...
        // go for a basic one to one mapping instead of the redundant meta data
        { "null": "0"},
        { "eins": "1"},
        { "zwei": "2"},
        { "drei": "3"},
        { "vier": "4"},
        { "fünf": "5"},
        { "sechs": "6"},
        { "sieben": "7"},
        { "acht": "8"},
        { "neun": "9"},
      ]
    }
  }
}


export const lessonsDatabase1 = {
  "germanNumbers1":{
    "title": "German Numbers 0-9",
    "speed":"1",
    // "mode":"second",// in the works idea
    "mode":"first",// in the works idea
    "pairs":[
      // { "null": "0"},
      // { "eins": "1"},
      // { "zwei": "2"},
      // { "drei": "3"},
      // { "vier": "4"},
      // { "fünf": "5"},
      // { "sechs": "6"},
      // { "sieben": "7"},
      // { "acht": "8"},
      // { "neun": "9"},
      // change that object pairs to arrays cause its a pain view indexes [0] [1]
      // phonetic spelling on left, numeral on right
      // what about Pronunciation???
      ["null", "0"],
      ["eins", "1"],
      ["zwei", "2"],
      ["drei", "3"],
      ["vier", "4"],
      ["fünf", "5"],
      ["sechs", "6"],
      ["sieben", "7"],
      ["acht", "8"],
      ["neun", "9"],
    ]
  },
  "spanishNumbers1":{
    "title": "Spanish Numbers 0-10",
    "speed":"1",
    "mode":"first",// in the works idea
    "pairs":[
      ["cero", "0"],
      ["uno", "1"],
      ["dos", "2"],
      ["tres", "3"],
      ["cuatro", "4"],
      ["cinco", "5"],
      ["seis", "6"],
      ["siete", "7"],
      ["ocho", "8"],
      ["nueve", "9"],
      ["diez", "10"],
    ]
  },
  "japaneseNumbers1":{
    "title": "Japanese Numbers 0-10 ish",
    "speed":"1",
    "mode":"first",// in the works idea
    "pairs":[
      // These are missing the hiriganas for Pronunciation
      ["zero/rei 零", "0"], // also maru
      ["ichi 一", "1"],
      ["ni 二", "2"],
      ["san 三", "3"],
      ["shi/yon 四", "4"],
      ["go 五", "5"],
      ["roku 六", "6"],
      ["shichi/nana 七", "7"], // nana
      ["hachi 八", "8"],
      ["kyū 九", "9"], // ku
      ["jū 十", "10"],
      // juu-ichi, ... 20=ni-juu reusing the number and juu for tens places
      // or rather juu(place) + numeral
    ]
  }
}
