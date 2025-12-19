const threadModel = require('../models/fanpageModels');
const path = require('path');
const fs = require('fs');

async function getAll(req, res) {
    const sort = req.query.sort;
    const statusSort = req.query.statusSort;
    const threads = await threadModel.getAllThreads(sort, statusSort);
    res.render('pages/index', { threads, sort, statusSort });
}
function getAddForm(req, res) {
    res.render('pages/add');
}
async function postAdd(req, res) {
    const { title, content, status } = req.body;
    await threadModel.addThread(title, content, status);
    res.redirect('/');
}
async function getEditForm(req, res) {
    const thread = await threadModel.getThreadById(req.params.id);
    res.render('pages/edit', {thread});
}
async function postEdit(req, res) {
    const {title, content, status} = req.body;
    await threadModel.updateThread(req.params.id, title, content, status);
    res.redirect('/');
}
async function deleteThread(req, res) {
    await threadModel.deleteThread(req.params.id);
    res.redirect('/');
}
async function getBlankData(req, res) {
    const blankModel = require('../models/blankModel');
    const blanks = await blankModel.getAllBlanks();
    res.render('pages/blank', { blanks });
}
function getAddBlankForm(req, res) {
    res.render('pages/addBlank');
}

async function postAddBlank(req, res) {
    const blankModel = require('../models/blankModel');
    const description = req.body.description;
    const date = req.body.date;
    let imgPath = '';
    if (req.file) {
        imgPath = '/img/' + req.file.filename;
    }
    await blankModel.addBlank(imgPath, description, date);
    res.redirect('/blank');
}

module.exports = {getAll, getAddForm, postAdd, getEditForm, postEdit, deleteThread, getBlankData, getAddBlankForm, postAddBlank};