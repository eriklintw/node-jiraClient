const Subscribers = {
    firstFunction: function(event, payload){
        console.log('1stFunction ' + payload)
    },
    secondFunction : function(event, payload){
        console.log('2ndFunction')
    }
}
export default Subscribers