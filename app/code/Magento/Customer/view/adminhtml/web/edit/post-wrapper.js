/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*global confirm*/
/*global define*/
define([
    'jquery',
    'mage/translate'
], function ($) {
    'use strict';

    /**
     * Create and get form with form key
     * @param {String} url
     * @returns {jQuery}
     */
    function getForm(url) {
        return $('<form>', {
            'action': url,
            'method': 'POST'
        }).append($('<input>', {
            'name': 'form_key',
            'value': window.FORM_KEY,
            'type': 'hidden'
        }));
    }

    $('#customer-edit-delete-button').click(function () {
        var msg = $.mage.__('Are you sure you want to do this?'),
            url = $('#customer-edit-delete-button').data('url');

        if (confirm(msg)) {
            getForm(url).submit();
        } else {
            return false;
        }
    });
});
