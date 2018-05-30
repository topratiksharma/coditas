import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {GitUsersService} from './git-users.service';
import {UserList} from '../shared/interface/user';


@Component({
    selector: 'app-git-users',
    templateUrl: './git-users.component.html',
    styleUrls: ['git-users.component.css']
})
export class GitUsersComponent implements OnInit {
    userListForm: any;
    userList;

    public sortType = [
        {value: 'nameAsc', name: 'Name (A - Z)'},
        {value: 'nameDsc', name: 'Name (Z - A)'},
        {value: 'rankAsc', name: 'Rank ↑'},
        {value: 'rankDsc', name: 'Rank ↓'}];

    constructor(private formBuilder: FormBuilder,
                private gitUserService: GitUsersService) {
    }

    ngOnInit() {
        this.userListForm = this.formBuilder.group({
            sortList: [''],
            searchCriteria: ['', [Validators.required]]
        });
    }

    getDetails(id) {

    }

    getUsers() {
        const _this = this;
        this.gitUserService.getGitUsers(this.userListForm.value.searchCriteria).subscribe(function (resp) {
            _this.userList = resp;
        });
    }
}
