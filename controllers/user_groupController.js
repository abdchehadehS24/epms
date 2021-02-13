var User_groupModel = require('../models/user_groupModel.js');

/**
 * user_groupController.js
 *
 * @description :: Server-side logic for managing user_groups.
 */
module.exports = {

    /**
     * user_groupController.list()
     */
    list: function (req, res) {
        User_groupModel.find(function (err, user_groups) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_group.',
                    error: err
                });
            }

            return res.json(user_groups);
        });
    },

    /**
     * user_groupController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        User_groupModel.findOne({_id: id}, function (err, user_group) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_group.',
                    error: err
                });
            }

            if (!user_group) {
                return res.status(404).json({
                    message: 'No such user_group'
                });
            }

            return res.json(user_group);
        });
    },

    /**
     * user_groupController.create()
     */
    create: function (req, res) {
        var user_group = new User_groupModel({
			group_name : req.body.group_name
        });

        user_group.save(function (err, user_group) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user_group',
                    error: err
                });
            }

            return res.status(201).json(user_group);
        });
    },

    /**
     * user_groupController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        User_groupModel.findOne({_id: id}, function (err, user_group) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_group',
                    error: err
                });
            }

            if (!user_group) {
                return res.status(404).json({
                    message: 'No such user_group'
                });
            }

            user_group.group_name = req.body.group_name ? req.body.group_name : user_group.group_name;
			
            user_group.save(function (err, user_group) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user_group.',
                        error: err
                    });
                }

                return res.json(user_group);
            });
        });
    },

    /**
     * user_groupController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        User_groupModel.findByIdAndRemove(id, function (err, user_group) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user_group.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
