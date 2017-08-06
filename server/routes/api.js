const express = require('express');
const router = express.Router();
const request = require('request');

var id;
const URL = '/items/';

/**
 * End Point para resultado da busca
 */
const END_POINT_BUSCA = "https://api.mercadolibre.com/sites/MLA/search?q=";

/**
 * End Point para resultado da busca e detalhes do produto
 */
const END_POINT_ID = "https://api.mercadolibre.com/items/";

//Rota para a busca de um produto
router.get(URL + ':query', (req, res) => {
    request(END_POINT_BUSCA + req.params.query, (error, response, body) => {
        if (error && response.statusCode !== 200) {
            return callback(error || { statusCode: response.statusCode });
        }
        // Faz a conversão para JSON Object
        var bodyResults = JSON.parse(body);
        var results = [];
        for (var i = 0; i < 4; i++) {
            results[i] = bodyResults.results[i];
        }
        res.send(results);
    })
});

// Rota para a busca dos detalhes.
router.get(URL + ':id/description', (req, res) => {
    // Busca o item pelo ID
    request(END_POINT_ID + req.params.id, (error, response, body) => {
        if (error && response.statusCode !== 200) {
            return callback(error || { statusCode: response.statusCode });
        }

        var bodyItem = JSON.parse(body);

        request(END_POINT_ID + req.params.id + '/description', (_error, _response, description) => {
            if (_error && _response.statusCode !== 200) {
                return callback(_error || { statusCode: _response.statusCode });
            }
            var textDescription = JSON.parse(description)
            bodyItem['description'] = textDescription;
            res.send(bodyItem);
        })
    })
});

module.exports = router;