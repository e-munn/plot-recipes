import React, {useState} from "react";
import {min, sum, hierarchy} from 'd3';
import dim from '../../media/theme/dim.json';

export default function listize(recipe) {

  var all = hierarchy(recipe.recipe[0]);

  const list = [];

  all.each(d => {
    if ('ingredient' in d.data) {
      list.push(d)
    }
  })

  var listHeight = list.length*20

  return [list, listHeight ]

};
