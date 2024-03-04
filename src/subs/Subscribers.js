const Subscribers = {
    firstFunction: function(payload){
        console.log('1stFunction ' + payload)
    },
    secondFunction : function(payload){
        console.log('2ndFunction')
    }
}
export default Subscribers