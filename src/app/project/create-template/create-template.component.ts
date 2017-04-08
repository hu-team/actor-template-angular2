import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { SingleProjectComponent } from "../single-project/single-project.component";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActorTemplate } from '../actor-template';
import { ActorService } from "../actor.service";

@Component({
  selector: 'create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss'],
  providers: [ActorService]
})
export class CreateTemplateComponent {
  form: FormGroup;

  constructor(public dialogRef: MdDialogRef<SingleProjectComponent>, @Inject(MD_DIALOG_DATA) public data: any, @Inject(FormBuilder) fb: FormBuilder, public as: ActorService) {
    this.form = fb.group({
      name: ['', Validators.required],
      description: ['']
    });
   }

   saveTemplate(value: Object) {
    const name: string = this.form.controls["name"].value;
    const description: string = this.form.controls["description"].value;
    const archive = false;
    const projectId = this.data.projectId;
    const template = new ActorTemplate(name, description, archive);

    this.as.createActorTemplate(name, projectId, template)
    .then(succ => {
      this.closeDialog();
    })
    .catch(err => {
      console.log(err);
    });
   }

   closeDialog() {
     this.dialogRef.close();
   }
}
