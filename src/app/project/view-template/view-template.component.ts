import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { SingleProjectComponent } from "../single-project/single-project.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorTemplate } from '../actor-template';
import { ActorService } from "../actor.service";
import { Actor } from "../actor";

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss'],
  providers: [ActorService]
})
export class ViewTemplateComponent implements OnInit {
  private userAdd: Boolean = false;
  private useraddForm: FormGroup;

  constructor(public dialogRef: MdDialogRef<SingleProjectComponent>, @Inject(MD_DIALOG_DATA) public data: any, @Inject(FormBuilder) fb: FormBuilder, public as: ActorService) {
    this.useraddForm = fb.group({
      name: ['', Validators.required],
      function: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      note: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveUser(user: Object) {
    console.log("ssasas");

    const name = this.useraddForm.controls["name"].value;
    const fn = this.useraddForm.controls["function"].value;
    const email = this.useraddForm.controls["email"].value;
    const phone = this.useraddForm.controls["phone"].value;
    const note = this.useraddForm.controls["note"].value;

    console.log(email);
    
    const actor = new Actor(name, email, note, phone, fn);

    this.as.createActor(actor, this.data.projectId, this.data.template.name)
    .then(succ => {
      console.log(succ);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
