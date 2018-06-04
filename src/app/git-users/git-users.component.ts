import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {GitUsersService} from './git-users.service';
import {UserList} from '../shared/interface/user';
import {constant} from '../shared/constant';
import {EventService} from '../shared/event/event.service';

@Component({
    selector: 'app-git-users',
    templateUrl: './git-users.component.html',
    styleUrls: ['git-users.component.css']
})
export class GitUsersComponent implements OnInit {
    userListForm: any;
    userList: UserList;
    repositories;

    sortType = constant.SORT_TYPE;

    constructor(private formBuilder: FormBuilder,
                private gitUserService: GitUsersService,
                private eventService: EventService) {
    }

    ngOnInit() {
        this.userListForm = this.formBuilder.group({
            sortList: [''],
            searchCriteria: ['', [Validators.required]]
        });
    }

    getDetails(id) {
        this.repositories = '';
        const _this = this;
        this.gitUserService.getUserDetail(id).subscribe(function (resp) {
            _this.repositories = resp;
        });
    }

    getUsers() {
        const searchCriteria = this.userListForm.value.searchCriteria;
        if (searchCriteria) {
            const _this = this;
            this.gitUserService.getGitUsers(searchCriteria).subscribe(function (resp) {
                _this.userList = resp;
                _this.eventService.broadcast('loaderOn', false);
            });
        } else {
            // TODO : Add a alert or popup
        }
    }

    sort() { // Sorting can be done via lodash too.... using inbuilt function as asked
        if (!this.userList) {
            return;
        }
        switch (this.userListForm.value.sortList) {
            case constant.SORT_TYPE_VALUE.NAME_ASCENDING:
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
            case constant.SORT_TYPE_VALUE.NAME_DESCENDING:
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
            case constant.SORT_TYPE_VALUE.RANK_ASCENDING:
                this.userList.items = this.userList.items.sort(function (a, b) {
                    return (a.score - b.score);
                });
                break;
            case constant.SORT_TYPE_VALUE.RANK_DESCENDING:
                this.userList.items = this.userList.items.sort(function (a, b) {
                    return (b.score - a.score);
                });
                break;
        }
    }
}
