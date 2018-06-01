import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {GitUsersService} from './git-users.service';
import {UserList} from '../shared/interface/user';


@Component({
    selector: 'app-git-users',
    templateUrl: './git-users.component.html',
    styleUrls: ['git-users.component.css']
})
export class GitUsersComponent implements OnInit {
    userListForm: any;
    userList: UserList;
    repositories;

    pendingList = [
        'Method naming', 'Design', 'Icons',
        'input box round', 'unDefined check',
        'Move static content to constant file'];

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

        this.getUsers();
    }

    getDetails(id) {
        const _this = this;
        this.gitUserService.getUserDetail(id).subscribe(function (resp) {
            _this.repositories = resp;
        });
    }

    getUsers() {
        const _this = this;
        this.gitUserService.getGitUsers('adsdas').subscribe(function (resp) {
            _this.userList = resp;
        });
    }

    sort() { //Sorting can be easily done via lodash.... using inbuilt function as asked
        switch (this.userListForm.value.sortList) {
            case 'nameAsc':
                this.userList.items = this.userList.items.sort(function (a, b) {
                    if (a.login.toLowerCase() < b.login.toLowerCase()) {
                        return -1;
                    }
                    if (a.login.toLowerCase() > b.login.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case 'nameDsc':
                this.userList.items = this.userList.items.sort(function (a, b) {
                    if (a.login.toLowerCase() < b.login.toLowerCase()) {
                        return 1;
                    }
                    if (a.login.toLowerCase() > b.login.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                });
                break;
            case 'rankAsc':
                this.userList.items = this.userList.items.sort(function (a, b) {
                    return (a.score - b.score);
                });
                break;
            case 'rankDsc':
                this.userList.items = this.userList.items.sort(function (a, b) {
                    return (b.score - a.score);
                });
                break;
        }
    }
}
