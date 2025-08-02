import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "lib-toast-template-2",
  standalone: false,
  templateUrl: "./toast-template-2.component.html",
  styleUrl: "./toast-template-2.component.css",
})
export class ToastTemplate2Component {
  @Input() showIcon: boolean = true;
  @Input() icon: any;
  @Input() closeToast: boolean = false;
  @Input() toastTitle: string = "Success";
  @Input() toastMessage: string = "";
  @Input() bubbleColor: any;
  @Input() toastIndex: any;
  @Input() toastStyle: any;
  @Input() toastText: any;
  @Input() toastPosition: any;
  @Input() iconStyle: any;
  @Input() progressBarStyle: any;
  @Input() showProgressBar = true;
  @Input() progress: any = 50;
  @Input() buttonHover: any;
  @Input() showButtons?: boolean = false;
  @Input() iconColor: any;
  @Input() acceptBtnLabel: any;
  @Input() cancelBtnLabel: any;

  @Output() fnCloseToast = new EventEmitter<{ index: any }>();
  @Output() toastAccept = new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["progress"]) {
      const currentProgress = changes["progress"].currentValue;
      if (currentProgress >= 100) {
        this.closeToast = true;
      }
    }
  }
  acceptBtn() {
    this.toastAccept.emit({ index: this.toastIndex });
    this.closeToast = true;
  }
  closeBtn() {
    this.fnCloseToast.emit({ index: this.toastIndex });
    this.closeToast = true;
  }
}
