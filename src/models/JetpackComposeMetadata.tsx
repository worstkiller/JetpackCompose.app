export default class JetpackComposeMetadata {
    composableName: string;
    composableGithubLink: string;
    officialDocsLink: string

    constructor(composableName: string, composableGithubLink: string, officialDocsLink: string) {
        this.composableName = composableName
        this.composableGithubLink = composableGithubLink
        this.officialDocsLink = officialDocsLink
    }
}