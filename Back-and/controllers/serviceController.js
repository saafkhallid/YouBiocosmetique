
const Service = require("../models/service");
const _ = require("lodash");
const fs = require("fs");
const Joi = require("joi");

const formidable = require("formidable");
const service = require("../models/service");


//crier un service
exports.createService = (req, res) => {
  let form = new formidable.IncomingForm();

  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not uploaded !",
      });
    }

    let service = new Service(fields);

    if (files.photo) {
      if (files.photo.size > Math.pow(10, 6)) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size !",
        });
      }

      service.photo.data = fs.readFileSync(files.photo.path);
      service.photo.contentType = files.photo.type;
    }

    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
    });

    const { error } = schema.validate(fields);

    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
      });
    }

    service.save((err, service) => {
      if (err) {
        return res.status(400).json({
          err: "Product not persist ",
        });
      }

      res.json({
        service,
      });
    });
  });
};


//Afficher un service

exports.showService = (req, res) => {
  req.service.photo = undefined;

  res.json({
    service: req.service,
  });
};




exports.serviceById = (req, res, next, id) => {
  service.findById(id).exec((err, service) => {
    if (err || !service) {
      return res.status(404).json({
        error: "Product not found !",
      });
    }

    req.service = service;
    next();
  });
};




//supprimer un service

exports.removeService = (req, res) => {
  let service = req.service;

  service.remove((err, service) => {
    if (err) {
      return res.status(404).json({
        error: " Service not found !",
      });
    }

    res.status(204).json({});
  });
};



// Afficher un photo de service
exports.photoService = (req, res) => {
  const { data, contentType } = req.service.photo;

  if (data) {
    res.set("Content-Type", contentType);

    return res.send(data);
  }
};



//Afficher tout les services

exports.allServices = (req, res) => {
  Service.find().exec((err, services) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }

    res.json({
      services,
    });
  });
};