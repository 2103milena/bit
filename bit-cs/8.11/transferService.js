class TransportService{
    transportTo(){
        console.log("by car")
    }
}



class PlaneTransportService{
    transportTo(){
        console.log("by plane")
    }
}

module.exports.Service = CarTransportService;
