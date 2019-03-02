import { Component, OnInit } from '@angular/core';

import { TreeviewService } from '../treeview.service';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {

  constructor(private TreeviewService: TreeviewService) { }
  formattedTreeNodes = {};
  getTreeView() { // normal method
    this.TreeviewService.getTreeData().subscribe(resp => {
      if(resp && resp['nodes']) {
          var treeNodes = resp['nodes'];
          this.formattedTreeNodes = {};
          for (var index = 0; index < treeNodes.length; index++) {
              this.formattedTreeNodes[treeNodes[index]['id']] = treeNodes[index];
              treeNodes[index]['childElts'] = [];
              if(treeNodes[index]['parent'] !== 0 ) {
                this.formattedTreeNodes[treeNodes[index]['parent']]['childElts'].push(treeNodes[index])
              }
          }
        console.log(this.formattedTreeNodes);
      }
    })
  }

  // DS method
  

  createTreeViewDs() { 
    
  }


  ngOnInit() {
    // this.getTreeView();

    this.createTreeViewDs();
  }

}
