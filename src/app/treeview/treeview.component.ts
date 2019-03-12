import { Component, OnInit } from '@angular/core';

import { TreeviewService } from '../treeview.service';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent {

  constructor(private TreeviewService: TreeviewService) { 
    this.getTreeView();
  }
  // formattedTreeNodes = {};
  // getTreeView() { // normal method
  //   this.TreeviewService.getTreeData().subscribe(resp => {
  //     if(resp && resp['nodes']) {
  //         var treeNodes = resp['nodes'];
  //         this.formattedTreeNodes = {};
  //         for (var index = 0; index < treeNodes.length; index++) {
  //             this.formattedTreeNodes[treeNodes[index]['id']] = treeNodes[index];
  //             treeNodes[index]['childElts'] = [];
  //             if(treeNodes[index]['parent'] !== 0 ) {
  //               this.formattedTreeNodes[treeNodes[index]['parent']]['childElts'].push(treeNodes[index])
  //             }
  //         }
  //       console.log(this.formattedTreeNodes);
  //     }
  //   })
  // }

  // DS method

  createTreeNode(data) {
    return {
      data : data, 
      parent: null, 
      children: {}
    }
  }


  createTree(data) {
    if(data.parent === 0){
      var node = this.createTreeNode(data);
      return node;
    } else {
      this.addChild(data, Object.keys(this.treeObj), null);
    }
  }

  addChild(data, keys,currentObj) {

    for (let index = 0; index < keys.length; index++) {
      if(!keys[index+1]) {
        if(data.parent == keys[index]) {
          if(currentObj) {
            debugger;
            currentObj.children[data.id] = this.createTreeNode(data);
            this.treeHtmlData += "<ul><li class="+data.id+">"+ data.text +"</li></ul>"
          } else {
            this.treeObj[keys[index]].children[data.id] = this.createTreeNode(data);
            this.treeHtmlData += "<ul><li class="+data.id+">"+ data.text +"</li></ul>"

          }
        }else {
          this.addChild(data, Object.keys(this.treeObj[keys[index]].children), this.treeObj[keys[index]].children[data.parent]);
        }
      }
    }

  }

  treeObj = {};
  treeHtmlData = "";
  getTreeView() {
    this.TreeviewService.getTreeData().subscribe(resp => {
      if(resp && resp['nodes']) {
          var treeNodes = resp['nodes'];
          this.treeObj = {};
          for (var index = 0; index < treeNodes.length; index++) {
            var root = this.createTree(treeNodes[index]);
            if(root) {
              this.treeObj[treeNodes[index]['id']] = root;
              this.treeHtmlData += "<li class='"+root.data.id+"'>"+ root.data.text + "</li>";
            }
          }
          console.log(this.treeObj);
      }
    })
  }


  

  
  // if(Object.keys(this.treeObj).indexOf(data.parent)) {
  //   var node = this.createTreeNode(data);
  //   if(this.treeObj[data.parent]) {
  //     this.treeObj[data.parent].children[data.id] = node;
  //   } else {

  //   }
    
  // }
 
}
