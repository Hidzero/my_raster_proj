import Car from '../models/Car.js';

class CarRepository {
    async create(userData){
        const car = new Car(userData);
        await car.save();
        return car;
    }
    async findAll(){
        return Car.find();
    }
    async findById(id) {
        return Car.findById(id);
    }
    async updateById(id, carData) {
        return Car.findByIdAndUpdate(id, carData, { new: true })
    }
    async deleteById(id) {
        return Car.findByIdAndDelete(id)
    }
}

const carRepositories = new CarRepository();
export default carRepositories;